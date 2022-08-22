import React, {useCallback, useState} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {
  Card,
  Dialog,
  Stack,
  studioTheme,
  ThemeProvider,
  Text,
  Code,
  Button,
  Heading,
  Flex,
  Box,
} from '@sanity/ui'
import {useId} from '@reach/auto-id'
import styled from 'styled-components'
import {ClipboardIcon, CheckmarkIcon} from '@sanity/icons'

export interface PluginDef {
  name: string
  versions: {
    v3: string
    v2?: string
  }
  sanityExchangeUrl?: string
}

const CopyButton = styled(Button)`
  background: none;
  border: none;
  box-shadow: none;
  height: 35px;

  &:hover {
    background: white;
  }
`

export interface IncompatiblePluginsProps {
  plugins: PluginDef[]
}

export function IncompatiblePlugins(props: IncompatiblePluginsProps) {
  const {plugins} = props
  const id = useId()

  const pluginsWithLinks = plugins.filter((p) => !!p.sanityExchangeUrl)
  return (
    <ThemeProvider theme={studioTheme}>
      <Dialog
        id={id || ''}
        header={`Incompatible plugin${plugins.length > 1 ? 's' : ''}`}
        width={1}
      >
        <Card padding={4}>
          <Stack space={5}>
            <Stack space={4}>
              <Box>
                <Text>
                  The following
                  {plugins.length > 1 ? ' plugins are ' : ' plugin is '} incompatible with this
                  Sanity Studio (V2):
                </Text>
              </Box>
              {plugins.map((p) => (
                <Card key={p.name}>
                  <Stack space={2}>
                    <Text>
                      <strong>
                        <span style={{color: '#C3362C'}}>{p.name}</span>
                      </strong>
                    </Text>
                    <Text>
                      Version: <span style={{color: '#C3362C'}}>{p.versions.v3}</span>
                    </Text>
                  </Stack>
                </Card>
              ))}
              <Text>
                {plugins.length > 1 ? 'These are' : 'It is'} built for{' '}
                <a href="#">Sanity Studio V3</a>.
              </Text>
            </Stack>

            <Card>
              <Stack space={4}>
                <Heading size={2}>Resolve the issue</Heading>

                <DowngradablePlugins plugins={plugins} />
                <RemovePlugins plugins={plugins} />

                <Text>... and then restart the Studio.</Text>
              </Stack>
            </Card>

            <Stack space={4}>
              <Heading size={1}>More information</Heading>
              {pluginsWithLinks.length > 0 && (
                <Stack space={2}>
                  {pluginsWithLinks.map((p) => (
                    <React.Fragment key={p.name}>
                      <Text>
                        {p.name} on <a href={p.sanityExchangeUrl}>Sanity Exchange</a>
                      </Text>
                    </React.Fragment>
                  ))}
                </Stack>
              )}

              <Text>
                <a href="#"> About Sanity Studio versions</a>
              </Text>
            </Stack>
          </Stack>
        </Card>
      </Dialog>
    </ThemeProvider>
  )
}

function DowngradablePlugins(props: IncompatiblePluginsProps) {
  const [copied, handleCopy] = useCopy()

  const plugins = props.plugins.filter((p) => !!p.versions.v2)

  if (!plugins.length) {
    return null
  }

  const yarnCommand = `yarn add ${plugins.map((p) => `${p.name}@"${p.versions.v2}"`).join(' ')}`

  return (
    <>
      <Text>
        Downgrade the plugin{plugins.length > 1 ? 's' : ''} by running this command in the Studio
        directory:
      </Text>
      <Card shadow={1} padding={4} style={{background: '#F1F3F6'}}>
        <Flex gap={4}>
          <Box flex={1}>
            <Code
              style={{
                color: '#101112FF',
                overflowX: 'auto',
                height: '2.5em',
                display: 'flex',
              }}
            >
              {yarnCommand}
            </Code>
          </Box>
          <CopyToClipboard text={yarnCommand} onCopy={handleCopy}>
            <CopyButton
              title="Copy to clipboard"
              icon={copied ? CheckmarkIcon : ClipboardIcon}
              mode="bleed"
            />
          </CopyToClipboard>
        </Flex>
      </Card>
    </>
  )
}

function RemovePlugins(props: IncompatiblePluginsProps) {
  const [copied, handleCopy] = useCopy()

  const plugins = props.plugins.filter((p) => !p.versions.v2)

  if (!plugins.length) {
    return null
  }

  const uninstallCommand = plugins.map((p) => `sanity uninstall ${p.name}`).join(' && ')

  return (
    <>
      <Text>
        Uninstall the plugin{plugins.length > 1 ? 's' : ''} by running this command in the Studio
        directory:
      </Text>
      <Card shadow={1} padding={4} style={{background: '#F1F3F6'}}>
        <Flex gap={4}>
          <Box flex={1}>
            <Code
              style={{
                color: '#101112FF',
                overflowX: 'auto',
                height: '2.5em',
                display: 'flex',
              }}
            >
              {uninstallCommand}
            </Code>
          </Box>
          <CopyToClipboard text={uninstallCommand} onCopy={handleCopy}>
            <CopyButton
              title="Copy to clipboard"
              icon={copied ? CheckmarkIcon : ClipboardIcon}
              mode="bleed"
            />
          </CopyToClipboard>
        </Flex>
      </Card>
    </>
  )
}

function useCopy() {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(() => {
    setCopied(true)
    const timeout = setTimeout(() => {
      setCopied(false)
    }, 1000)
    return () => {
      clearTimeout(timeout)
    }
  }, [setCopied])

  return [copied, handleCopy] as [typeof copied, typeof handleCopy]
}

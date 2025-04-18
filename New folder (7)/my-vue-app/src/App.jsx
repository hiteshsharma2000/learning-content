import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Fieldset, Input, Stack } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select"

import Navbar from './components/Navbar'
import { ClipboardIconButton, ClipboardRoot } from "@/components/ui/clipboard"

import { Avatar,AvatarGroup } from "@/components/ui/avatar"
import Banner from './components/Banner'
// import Provider from '@/components/ui/provider';
function App() {
  const [count, setCount] = useState(0)
  const items = [
    { value: "a", title: "First Item", text: "Some value 1..." },
    { value: "b", title: "Second Item", text: "Some value 2..." },
    { value: "c", title: "Third Item", text: "Some value 3..." },
  ]

  return (
    < div style={{backgroundColor:"gray"}}>
     <Navbar/>
     <br />
     <br />
     <br />
     <Banner/>
     <AvatarGroup size="lg">
      <Avatar
        src="https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp?s=d4b03c7291407bde303bc0758047f6bd"
        name="Uchiha Sasuke"
      />
      <Avatar
        src="https://cdn.myanimelist.net/r/84x124/images/characters/7/284129.webp?s=a8998bf668767de58b33740886ca571c"
        name="Baki Ani"
      />
      <Avatar
        src="https://cdn.myanimelist.net/r/84x124/images/characters/9/105421.webp?s=269ff1b2bb9abe3ac1bc443d3a76e863"
        name="Uchiha Chan"
      />
      <Avatar variant="solid" fallback="+3" />
    </AvatarGroup>
    <ClipboardRoot value="https://chakra-ui.com">
      <ClipboardIconButton />
    </ClipboardRoot>
    <Fieldset.Root size="lg" maxW="md">
      <Stack>
        <Fieldset.Legend>Contact details</Fieldset.Legend>
        <Fieldset.HelperText>
          Please provide your contact details below.
        </Fieldset.HelperText>
      </Stack>

      <Fieldset.Content>
        <Field label="Name">
          <Input name="name" />
        </Field>

        <Field label="Email address">
          <Input name="email" type="email" />
        </Field>

        <Field label="Country">
          <NativeSelectRoot>
            <NativeSelectField
              name="country"
              items={[
                "United Kingdom (UK)",
                "Canada (CA)",
                "United States (US)",
              ]}
            />
          </NativeSelectRoot>
        </Field>
      </Fieldset.Content>

      <Button type="submit" alignSelf="flex-start">
        Submit
      </Button>
    </Fieldset.Root>
    </div>
  )
}

export default App

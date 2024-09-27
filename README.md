# Nextform JavaScript Client

Nextform helps you collect, generate, and keep track of commonly requested forms like form W-9 with an API that is easy to implement and white label forms that show your organization's name and brand.

### Install

```bash
npm i @balancer-team/nextform
```

### Usage

Provide your API key to the `Nextform` constructor. You can obtain an API key by signing up at [nextform.app](https://nextform.app/).

```ts
import { Nextform } from '@balancer-team/nextform'

const nextform = new Nextform({ apiKey: 'YOUR_API_KEY' })

const session = await nextform.createSession({
  formType: 'w9',
})

// Output:
//
// {
//   id: 'oymuG8Hz2NJJVrEvYNM5e',
//   formType: 'w9Mar2024',
//   reference: '',
//   status: 'open',
//   url: 'https://nextform.app/form/w9Mar2024/oymuG8Hz2NJJVrEvYNM5e',
//   ...
// }
```

The [session object](https://nextform.app/docs/create-session) contains a URL that you can use to open the form in a browser. Redirect your users to this URL to collect the form data.

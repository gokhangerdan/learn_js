import Head from 'next/head'

function Header(props) {
    return (
      <Head>
        <title>{props.title} Page</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
      </Head>
    )
  }

export default Header
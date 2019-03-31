import Link from 'next/link'

function Navigation() {
    return (
        <div>
            <Link href="/"><a>home</a></Link>
            <Link href="/about"><a>about</a></Link>
            <Link href="/contact"><a>contact</a></Link>
        </div>
    )
  }
  
  export default Navigation
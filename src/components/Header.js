import Head from "next/head"

export const Header = (props) => {
    return <Head>
    <title>{props.title}</title>
    <meta name="description" content={props.description} />
    <meta name="keywords" content={props.keywords} />
    </Head>
}

// export default Header;

export const Header2 = ({title, description, keywords,children}) => {
    return <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    {children}
    </Head>
}


type Meta = {
    id: string,
    title: string,
    date: string,
    featureimage: string,
    stripe: string,
    paypal: string,
    lightning: string,
    svgfile: string,
    tags: string[],
}

type VectorPost = {
    meta: Meta,
    content: ReactElement<any, string | JSXElementConstructor<any>>,
}


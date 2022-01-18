import * as React from "react"
import {graphql, useStaticQuery} from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image";

const Index = (props) => {
    const query = useStaticQuery(graphql`
        query Icons {
            allFile{
                nodes {
                    name
                    publicURL
                    extension
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    `)
    React.useEffect(() => {
        const html = document.querySelector('html')
        const body = document.querySelector('body')
    })
    const icons = query.allFile.nodes
    let icon = icons.filter(item => item.name == (props.imageName || "default"))[0];
    const default_ = icons.filter(item => item.name == "default")[0];
    if (!icon){
        icon = default_;
    }
    if (props.type == "background") {
        console.log(icon.publicURL)
        return (
            <>
                <style jsx>{`
                  .root {
                    background: url(${icon.publicURL});
                  }
                `}</style>

                <div className="root"
                     style={{
                         height: props.height ? props.height : "100%",
                         width: props.width ? props.width : "100%",
                         backgroundRepeat: "no-repeat",
                         backgroundAttachment: "fixed",
                         backgroundSize: "cover",
                     }}
                >

                </div>
            </>
        )
    }
    return (
        <GatsbyImage
            image={icon.childImageSharp.gatsbyImageData}
            style={{
                height: props.height ? props.height : "100%",
                width: props.width ? props.width : "100%",

            }}
            imgStyle={{
                objectFit: props.objectFit ? props.objectFit : "cover",
                borderRadius: props.borderRadius ? props.borderRadius : null,
                overflow: "hidden",
            }}
            alt={props.alt}

        />
    )
}
export default Index;
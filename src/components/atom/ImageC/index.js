import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Index = (props) => {
    const query = useStaticQuery(graphql`
        query Images {
            allFile(filter: {sourceInstanceName: {eq: "image"}}) {
                nodes {
                    name
                    extension
                    childImageSharp {
                        gatsbyImageData (
                            quality: 90
                            formats:[JPG]
                            backgroundColor: "white"
                            breakpoints: [1920]
                        )
                    }
                }
            }
        }

    `)
    const icons = query.allFile.nodes
    let icon = icons.filter(item => item.name == (props.imageName || "default"))[0]
    const default_ = icons.filter(item => item.name == "default")[0]
    if (!icon) {
        icon = default_
    }
    if (props.type == "background") {
        return (
            <>
                <style jsx>{`
          .root {
            background: url(${icon.childImageSharp.gatsbyImageData.images.fallback.src});
          }
        `}</style>

                <div
                    className={"root " + props.className}
                    style={{
                        height: props.height ? props.height : "100%",
                        width: props.width ? props.width : "100%",
                        backgroundRepeat: "no-repeat",
                        backgroundAttachment: "fixed",
                        backgroundSize: "contain",
                        ...props.style
                    }}
                >
                </div>
            </>
        )
    }
    return (
        <GatsbyImage
            className={props.className}
            image={icon.childImageSharp.gatsbyImageData}
            style={{
                height: props.height ? props.height : "100%",
                width: props.width ? props.width : "100%",
                ...props.style
            }}
            imgStyle={{
                objectFit: props.objectFit ? props.objectFit : "cover",
                borderRadius: props.borderRadius ? props.borderRadius : null,
                overflow: "hidden",
                objectPosition: props.objectPosition ? props.objectPosition : "",
            }}
            alt={props.alt}

        />
    )
}
export default Index
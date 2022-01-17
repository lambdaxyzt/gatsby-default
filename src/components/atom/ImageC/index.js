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
    const icons = query.allFile.nodes
    const icon = icons.filter(item => item.name == (props.imageName || "gatsby-icon"))[0]
    return (
        <GatsbyImage
            image={icon.childImageSharp.gatsbyImageData}
            style={{
                height:"100%",
                width:"100%",
            }}
            imgStyle={{
                objectFit:"cover"
            }}

        />
    )
}
export default Index;
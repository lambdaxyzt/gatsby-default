import * as React from "react"
import * as styles from "./index.module.scss"
import {graphql, useStaticQuery} from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image";

const ImageC = (props) => {
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
    const icon = icons.filter(item => item.name == (props.imageName || "Frontpage-SBTi"))[0]
    const extension = icon.extension
    if (extension == 'svg') {
        return (
            <img
                className={styles.image}
                src={icon.publicURL}
                {...props}
            />
        )
    } else {
        return (
            <GatsbyImage
                objectFit="JJ"
                className={styles.image}
                image={icon.childImageSharp.gatsbyImageData}
                {...props}

            />
        )
    }
}
export default ImageC;
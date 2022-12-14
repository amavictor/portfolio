import "./ProjectCard.styles"
import {CardBody} from "./ProjectCard.styles";
export const ProjectCard =({image})=>{
    return(
        <CardBody>
            <img src={image} alt={"project image"}/>
        </CardBody>
    )
}
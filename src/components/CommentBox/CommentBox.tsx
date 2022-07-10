import "./CommentBox.scss"
import NoImage from "../../assets/icons/no-image.webp"

interface Props {
    image: string,
    name: string,
    days: string,
    comment: string,
}

const CommentBox:React.FC<Props> = (props: Props) => {
    return (
        <div className="comment-box">
            <div className="sighting-box__about">
                <div className="sighting-box__about__icon">
                    <img 
                        className="sighting-box__about__icon__img" 
                        src={props.image
                            ? props.image
                            : NoImage
                        } 
                        alt={props.image
                            ? props.image
                            : NoImage}
                    />
                    <div className="d-flex flex-column">
                        <p className="sighting-box__about__name">{props.name}</p>
                        <p className="sighting-box__about__username">{props.days}</p>
                    </div>
                </div>
                <p className="sighting-box__about__description">
                {props.comment}
                </p>
                <hr className="my-4" />
            </div>
        </div>
    )
}

export default CommentBox
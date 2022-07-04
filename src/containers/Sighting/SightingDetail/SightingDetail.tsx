import Button from "../../../components/Button/Button";
import "./SightingDetail.scss"
import Image from "../../../assets/images/home-banner.jpg"
import NoImage from "../../../assets/icons/no-image.webp"
import ChatIcon from "../../../assets/icons/chat.svg"
import HeartIcon from "../../../assets/icons/heart.svg"
import CommentBox from "../../../components/CommentBox/CommentBox";
import TextAreaInput from "../../../components/Inputs/TextAreaInput/TextAreaInput";
import { Form, Formik } from "formik";
import { commentInitialValue } from "./constants";
import { validationSchemeComment } from "../../../utils/validations";
import { useState } from "react";
import Location from "../../../components/Location/Location";
import { LatLngExpression } from "leaflet";

interface Props {

}

const SightingDetail:React.FC<Props> = (props: Props) => {

    const [isAddCommentView, addCommentView] = useState<boolean>(false);
    const position = [42.389017, 20.432032];

    const handleSubmit = () => {

    }

    return (
        <div className="sighting-detail">
            <Location 
                position={position as LatLngExpression}
                buttons={
                    <>
                        <Button
                            isSmall
                            isColored
                            text="View on Google Maps"
                            className="me-3"
                            onClick={() => console.log("button")}
                                />
                        <Button
                            isSmall
                            text="Report"
                            onClick={() => console.log("button2")} />
                    </>
                }
            />
            <div className="container-fluid default-container">
                <div className="row sighting-detail__user_description box-shadow">
                    <div className="col-md-3">
                        <img 
                            className="sighting-detail__user_img"
                            src={Image
                                ? Image
                                : NoImage
                            } 
                            alt={Image}
                            />
                    </div>
                    <div className="col-md-9 d-flex align-items-center"> 
                        <div className="sighting-box__about">
                            <div className="sighting-box__about__icon">
                                <img 
                                    className="sighting-box__about__icon__img" 
                                    src={Image
                                        ? Image
                                        : NoImage
                                    } 
                                    alt={Image}
                                />
                                <div className="d-flex flex-column">
                                    <p className="sighting-box__about__name">Balcony Flower</p>
                                    <p className="sighting-box__about__username">by Adam Moore</p>
                                </div>
                            </div>
                            <p className="sighting-box__about__description">
                                Platycodon grandiflorus (from Ancient Greek πλατύς "wide" and κώδων "bell") is a species of herbaceous flowering perennial plant of the family Campanulaceae, and the only member of the genus Platycodon. It is native to East Asia (China, Korea, Japan, and the Russian Far East).[1] It is commonly known as balloon flower[2][3] (referring to the balloon-shaped flower buds), Chinese bellflower,[2] or platycodon.[2]
                            </p>
                            <hr />
                            <div className="d-flex align-items-center justify-content-start sighting-box__about__buttons">
                                <button className="comment">
                                    <img src={ChatIcon} alt={ChatIcon} />
                                    <p>18 Comments</p>
                                </button>
                                <button className="like">
                                    <img src={HeartIcon} alt={HeartIcon} />
                                    <p>12 Favorites</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-5">
                    <hr className="my-5" />
                    <div className="col-md-8 offset-md-2 mb-5">
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="total-comments">14 Comments</p>
                            <Button 
                                isSmall
                                text="Add Comment"
                                className="box-shadow"
                                onClick={() => addCommentView(!isAddCommentView)}/>
                        </div>
                    </div>
                    <div className="col-md-8 offset-md-2">
                        <CommentBox
                            image={Image}
                            name="Balcony Flower"
                            days="4 days ago"
                            comment="So strongly and metaphysically did I conceive of my situation then, that while earnestly watching his motions, I seemed distinctly to perceive that my own individuality was now merged in a joint stock company of two; that my free will had received a mortal wound; and that another's mistake or misfortune might plunge innocent me into unmerited disaster and death." />
                    </div>
                    <div className="col-md-8 offset-md-2">
                        <CommentBox
                            image={Image}
                            name="Balcony Flower"
                            days="4 days ago"
                            comment="So strongly and metaphysically did I conceive of my situation then, that while earnestly watching his motions, I seemed distinctly to perceive that my own individuality was now merged in a joint stock company of two; that my free will had received a mortal wound; and that another's mistake or misfortune might plunge innocent me into unmerited disaster and death." />
                    </div>
                    <div className="col-md-8 offset-md-2">
                        <CommentBox
                            image={Image}
                            name="Balcony Flower"
                            days="4 days ago"
                            comment="So strongly and metaphysically did I conceive of my situation then, that while earnestly watching his motions, I seemed distinctly to perceive that my own individuality was now merged in a joint stock company of two; that my free will had received a mortal wound; and that another's mistake or misfortune might plunge innocent me into unmerited disaster and death." />
                    </div>
                    {isAddCommentView &&
                    <div className="col-md-8 offset-md-2">
                        <Formik
                            initialValues={commentInitialValue}
                            validationScheme={validationSchemeComment}
                            onSubmit={handleSubmit as () => void}>
                            {(formikProps) => (
                                <Form className="">
                                    <TextAreaInput
                                        className='w-100 mb-3'
                                        name={'message'}
                                        bordered
                                        cols='100'
                                        rows='4'
                                        labelKey={"Write a comment…"} />
                                    <div className="d-flex justify-content-end">
                                        <Button
                                            isSmall
                                            isColored
                                            text="Publish Comment" 
                                            onClick={() => console.log("button")}
                                                />
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default SightingDetail
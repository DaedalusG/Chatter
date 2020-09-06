import React from 'react';
import CloseButton from '../images/CloseButton.js'
import LeftArrow from '../images/LeftArrow.js'

const ReplyModal = (props) => {
    return (
        <div className={`reply-modal-c ${props.replyModal ? "visible" : "hidden"}`}>
            <div className={"reply-modal-background"} ></div>
            <div className={"reply-form-background"}>
                <div className={"reply-form-header"}>
                    <div onClick={props.handleReplyClick}>
                        <CloseButton />
                    </div>
                </div>
                <textarea className={"reply-form-textarea"}>Comment submission box</textarea>
            </div>
        </div>
    )
}

export default ReplyModal
import React from 'react';

const ReplyModal = (props) => {
    return (
        <div className={`reply-screen-c ${props.replyModal ? "visible" : "hidden"}`}>
            <div className={"reply-form-background"}>
                <textarea className={"test"}>Comment submission box</textarea>
                <div className={"reply-modal-background"} ></div>
            </div>
        </div>
    )
}

export default ReplyModal
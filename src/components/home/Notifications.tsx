import { UseContext } from "@/lib/contextAuthFirebase";
import { useEffect, useState } from "react";
import Link from "next/link";
import Notification from "./Notification";
const Notifications = () => {

    const context = UseContext();

    const [messagesNoRead, setMessagesNotRead] = useState<number>(0);
    const [requestPendingFriends, setRequestPendingFriends] = useState<number>(0);

    const [tagsNotSeePhotos, setTagsNotSeePhotos] = useState<number>(0);
    const [photosComentaries, setPhotosComentaries] = useState<number>(0);
    const [countPhotosLikes, setCountPhotosLikes] = useState<number>(0);


    const [tagsNotSeeVideos, setTagsNotSeeVideos] = useState<number>(0);
    const [videosComentaries, setPhotosVideos] = useState<number>(0);
    const [countVideosLikes, setCountVideosLikes] = useState<number>(0);

    //post notifications
    const [countPostAnwers, setCountPostAnswers] = useState<number>(0);
    const [countPostLikes, setCountPostLikes] = useState<number>(0);
    const [countPostTags, setCountPostTags] = useState<number>(0);



    return (<div className="">

        <Notification href={``} total={requestPendingFriends} text={`peticiones de amistad`} notification="friends request">
            <i className="bi bi-person-raised-hand fs-4"></i>
        </Notification>

        <Notification href={``} total={messagesNoRead} text={`mensajes privados`} notification="messages">
            <i className="bi bi-envelope-fill fs-4"></i>
        </Notification>

        <Notification href={``} total={tagsNotSeePhotos} text={`fotos te han etiquetado`} notification="photos tags">
            <i className="bi bi-tags-fill fs-4"></i>
        </Notification>

        <Notification href={``} total={photosComentaries} text={`fotos con comentarios`} notification="photos comentaries">
            <i className="bi bi-chat-fill fs-4"></i>
        </Notification>

        <Notification href={``} total={countPhotosLikes} text={`fotos con me gustas`} notification="photos likes">
            <i className="bi bi-heart-fill fs-4"></i>
        </Notification>
        
        <Notification href={``} total={tagsNotSeeVideos} text={`videos te han etiquetado`} notification="videos tags">
            <i className="bi bi-tags fs-4"></i>
        </Notification>

        <Notification href={``} total={videosComentaries} text={`videos con comentarios`} notification="videos comentaries">
            <i className="bi bi-chat-dots fs-4"></i>
        </Notification>

        <Notification href={``} total={countVideosLikes} text={`videos con me gustas`} notification="videos likes">
            <i className="bi bi-heart fs-4"></i>
        </Notification>

        <Notification href={``} total={countPostAnwers} text={`posts con comentarios`} notification="posts comentaries">
            <i className="bi bi-pencil-fill fs-4"></i>
        </Notification>

        <Notification href={``} total={countPostLikes} text={`posts con me gustas`} notification="posts likes">
            <i className="bi bi-heart-fill fs-4"></i>
        </Notification>
        
        <Notification href={``} total={countPostTags} text={`posts te han etiquetado`} notification="posts tags">
            <i className="bi bi-tags-fill fs-4"></i>
        </Notification>
    
    </div>)

}

export default Notifications;
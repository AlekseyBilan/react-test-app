
function Article(props) {
    return (
        <article key={props.id} data-user-id={props.userId}>
            <h2>{props.fullTitle}</h2>
            <p>{props.userBody}</p>
            <p>{props.email}</p>
        </article>
    );
}

export default Article;
import ContentCard from './ContentCard'

function ContentList({ contents, onDeleteContent, onEditContent, currentUser }) {

    // Theory to get user data:
    // create a fetch statement here to '/api/contents' with the related place_id
    // map through a specific content for each user and it's data...?

    const contentCard = contents.map(content => {
        return (
            <ContentCard
                key={content.id}
                content={content}
                onDeleteContent={onDeleteContent}
                onEditContent={onEditContent}
                currentUser={currentUser}
            />
        )
    })

    return (
        <div>
            <h2 className='text-2xl'>Community Experiences</h2>
            <ul>
                <li>
                    {contentCard}
                </li>
            </ul>
        </div>
    )

}

export default ContentList
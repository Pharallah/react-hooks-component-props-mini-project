import React from 'react'
import Article from './Article'

function ArticleList(props) {
    
    const article = props.posts.map(prop => {
        console.log(prop)
        return <Article key={prop.id} title={prop.title} date={prop.date} preview={prop.preview}/>
    })
    
    return (
    <main>
        {article}
    </main>
  )
}

export default ArticleList
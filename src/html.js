import PropTypes from 'prop-types';

export default function HTML(props) {
    return (
        <html lang='en' {...props.htmlAttributes}>
            <head>
                <meta charSet='utf-8' />
                <meta httpEquiv='x-ua-compatible' content='ie=edge' />
                <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
                <meta name='theme-color' content='#111827' />
                {props.headComponents}
            </head>
            <body {...props.bodyAttributes}>
                {/* Skip link for keyboard users */}
                <a href="#main-content" style={{position:'absolute',left:'-999px',top:'auto',width:'1px',height:'1px',overflow:'hidden'}} onFocus={(e)=>{e.currentTarget.style.left='0';e.currentTarget.style.width='auto';e.currentTarget.style.height='auto';e.currentTarget.style.zIndex='1000'; e.currentTarget.style.background='#111827'; e.currentTarget.style.color='#fff'; e.currentTarget.style.padding='8px 12px';}}>Skip to content</a>
                {props.preBodyComponents}
                <div key={'body'} id='___gatsby' dangerouslySetInnerHTML={{ __html: props.body }} />
                {props.postBodyComponents}
            </body>
        </html>
    )
}

HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array,
}

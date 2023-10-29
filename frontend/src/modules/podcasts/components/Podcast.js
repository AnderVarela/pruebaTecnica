const Podcast = ({name, author, image}) => {
    return (
        <div style={{
            width: 174, height: 178, paddingLeft: 16, paddingRight: 16, paddingTop: 4, paddingBottom: 4,
            background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 15,
            flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 4,
            display: 'inline-flex'
        }}>
            <div style={{
                flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center',
                gap: 24, display: 'flex'
            }}>

                <img style={{width: 94, height: 94, boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 9999}}
                     src={image}/>

                <div style={{
                    color: 'black', fontSize: 22, fontFamily: 'Balsamiq Sans', fontWeight: '400',
                    wordWrap: 'break-word'}}>

                    {name}

                </div>
            </div>
            <div style={{
                paddingTop: 4, paddingBottom: 4, flexDirection: 'column', justifyContent: 'flex-end',
                alignItems: 'center', display: 'flex'
            }}>
                <div style={{
                    color: '#727272', fontSize: 12, fontFamily: 'Balsamiq Sans', fontWeight: '400',
                    wordWrap: 'break-word'}}>

                    {author}
                </div>
            </div>
        </div>
    )
};

export default Podcast;
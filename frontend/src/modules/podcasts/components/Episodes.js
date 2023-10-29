const Episodes = ({episodes}) => {
    return (
        <div style={{width: 270, height: 37, padding: 10, background: 'white',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 5, justifyContent: 'flex-start',
            alignItems: 'center', gap: 10, display: 'inline-flex'}}>

            <div style={{color: 'black', fontSize: 14, fontFamily: 'Balsamiq Sans', fontWeight: '400',
                wordWrap: 'break-word'}}>

                Episodes: {episodes}
            </div>

        </div>
    )
};

export default Episodes;


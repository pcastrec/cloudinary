import React from "react"

export const Formulaire = () => {

    const [image, setImage] = React.useState('')
    const [data, setData] = React.useState('')
    const fileRef = React.useRef()

    const handleSubmit = e => {
        e.preventDefault()
        const form = new FormData()
        form.append('file', image)
        form.append('upload_preset', 'tind3r')
        form.append('cloud_name', 'dnzxyvuxa')
        form.append('tags', 'tinder')
        // POST https://api.cloudinary.com/v1_1/demo/image/upload
        fetch('https://api.cloudinary.com/v1_1/dnzxyvuxa/image/upload', {
            method: 'POST',
            body: form
        })
            .then(res => res.json())
            .then(data => { console.log(data); setData(data) })
            .catch(err => console.log(err))
    }

    const handleDelete = () => {
        const form = new FormData()
        form.append('token', data.delete_token)
        fetch('https://api.cloudinary.com/v1_1/dnzxyvuxa/delete_by_token', {
            method: 'POST',
            body: form
        })
            .then(res => res.json())
            .then(data => {
                setData('')
                fileRef.current.value = ''
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type={'file'} ref={fileRef} onChange={e => setImage(e.target.files[0])} />
                <input type={'submit'} />
            </form>
            <button onClick={handleDelete}>X</button>
            <img src={data.url} alt={'uploaded'} />
        </>
    )
}
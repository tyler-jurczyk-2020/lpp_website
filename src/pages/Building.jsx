import Unit from "./Unit";

function toImages(floor_glob) {
    let floor_images = []
    for(const img in floor_glob) {
        floor_images.push(img)
    }
    return floor_images
}

function Building({ address, location }) {
    let first_floor_glob, second_floor_glob, third_floor_glob
    let first_floor_images, second_floor_images, third_floor_images
    if(location != undefined) {
        switch(location) {
            case "ashland":
                first_floor_glob = import.meta.glob('/public/ashland/*.jpg')
                second_floor_glob = import.meta.glob('/public/ashland/*.jpg')
                third_floor_glob = import.meta.glob('/public/ashland/*.jpg')
                break
            default: 
                first_floor_glob = null
                second_floor_glob = null
                third_floor_glob = null
                break
        }
        if(first_floor_glob != undefined) {
            first_floor_images = toImages(first_floor_glob)
            second_floor_images = toImages(second_floor_glob)
            third_floor_images = toImages(third_floor_glob)
        }
    }
    else {
        first_floor_images, second_floor_images, third_floor_images = []
    }
     
    return(
    <div>
        <p>{address}</p>
        <Unit unitImages={first_floor_images}/>
        <Unit unitImages={second_floor_images}/>
        <Unit unitImages={third_floor_images}/>
    </div>
    );
}

export default Building

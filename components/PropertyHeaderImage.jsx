import Image from "next/image";

const PropertyHeaderImage = ({image}) => {
    return (
        <section>
            <div className="container-xl m-auto">
                <div className="relative grid h-[400px] grid-cols-1">
                    <Image
                        src={`/images/properties/${image}`}
                        alt=""
                        className="object-cover h-[400px] w-full"
                        width={0}
                        height={0}
                        sizes="100vw"
                        priority={true}
                    />
                </div>
            </div>
        </section>
    )
}

export default PropertyHeaderImage

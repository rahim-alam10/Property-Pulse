import properties from '@/properties.json';

async function fetchProperties(){
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`);

    if(!res.ok){
      throw new Error('Failed to fetch data');
    }

    return res.json();

  } catch (error) {
    console.log("Fetch Properties Error: ",error)
  }
}

const PropertiesPage = async() => {
  const properties = await fetchProperties();

  //Sort Properties by date
  properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

  return (
    <div>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py-6">
          {properties.length === 0 ? (
            <p className="text-center text-gray-500">No Properties Found</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard 
                  key={property._id}
                  property={property}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default PropertiesPage



export default function Userprofile({params}: any) {
    return (
        <div className="">
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-4xl font-bold">Profile Page 
                <span className="ml-3 p-2 bg-blue-900 rounded text-white">{params.id}</span></h1>
                
            </div>
        </div>
    )
}
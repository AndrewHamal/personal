import { useRouter } from "next/router"

export default function Particle()
{
    const router = useRouter();
    return (
        <>
            <div onClick={} className="cursor-pointer logo absolute top-[90px] left-[90px]">
                <img src="/img/logo.svg" width={290} alt="" />
            </div>

            <div className="svg absolute bottom-0">
                <img src="/img/corner-vector.svg" width={350} alt="" />
            </div>

            <div className="svg absolute bottom-[-40px]">
                <img src="/img/thread.svg" alt="" />
            </div>

            <div className='svg absolute right-0 bottom-0'>
                <img src="/img/bg-vector.svg" alt="" /> 
            </div>
        </>
    )
}
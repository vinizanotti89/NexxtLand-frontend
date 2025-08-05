export default function Loading() {
// You can add any UI inside Loading, including a Skeleton.
return <div className=" h-screen w-screens flex justify-center items-center">
    <div className="flex flex-row gap-2 justify-center items-center">
        <div className="w-4 h-4 rounded-full  bg-brand-yellow-50 animate-bounce"></div>
        <div className="w-4 h-4 rounded-full  bg-brand-yellow-50 animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-4 h-4 rounded-full  bg-brand-yellow-50 animate-bounce [animation-delay:-.5s]"></div>
    </div>
</div>
}
import React from 'react'

const ChatBody = () => {
  return (
    <div className='flex flex-col gap-4'>
        {/* client messgae */}
        <div className='border-[#999999] break-words 
        border-2  rounded-xl self-end px-3 max-w-[80%] '> 
            <prev>
                <span>Hy Chat GPT, Can you help me?</span>
            </prev>
        </div>
        <diV>
            <pre>
                <span>Yeah, I can help you with anything</span>
            </pre>
        </diV>
    </div>
  )
}

export default ChatBody
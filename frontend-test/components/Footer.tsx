import React from 'react'

function Footer() {
  const menuList = [
    {
      title: '会員登録',
      link: '',
    },
    {
      title: '運営会社',
      link: '',
    },
    {
      title: '利用規約',
      link: '',
    },
    {
      title: '個人情報の取扱について',
      link: '',
    },
    {
      title: '特定商取引法に基づく表記',
      link: '',
    },
    {
      title: 'お問い合わせ',
      link: '',
    },
  ]

  return (
    <div className='bg-dark-gray py-[28px]'>
      <div className='w-[80%] mx-auto'>
        <ul className='flex flex-row justify-start items-center'>
          {
            menuList.map((item, index) => {
              return (
                <li key={index} className="text-white text-base mr-[45px] font-hiragino">{item.title}</li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Footer
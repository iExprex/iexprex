import { FaComputer, FaFileShield } from 'react-icons/fa6';
import dwnImg from '../assets/download.png';
import { FaBitcoin, FaBullhorn } from 'react-icons/fa'

export const blogObj = [
  {
    id: 1,
    title: `Custom and design your card, make it unique`,
    description: `Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Quo, ad. Laboriosam saepe nostrum quod corporis, debitis blanditiis`,
    imgUrl: dwnImg,
    createdAt: `Tuesday 23 July 2024`,
    ico: <FaComputer/>,
    category: `Design & Development`,
    author: `Osman Abdullah`,
  },
  {
    id: 2,
    title: `Get your documents done with iExprex Manager's Support`,
    description: `Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Quo, ad. Laboriosam saepe nostrum quod corporis, debitis blanditiis`,
    imgUrl: dwnImg,
    createdAt: `Tuesday 23 July 2024`,
    ico: <FaFileShield/>, 
    category: `Office & Productivity`,
    author: `Osman Abdullah`,
  },
  {
    id: 3,
    title: `Cryptocurrency and Blockchain Deep Dive`,
    description: `Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Quo, ad. Laboriosam saepe nostrum quod corporis, debitis blanditiis`,
    imgUrl: dwnImg,
    createdAt: `Tuesday 23 July 2024`,
    ico: <FaBullhorn/>, 
    category: `Digital Marketing`,
    author: `Osman Abdullah` 
  },
  {
    id: 4,
    title: `Web3.0 Is The Future of Web Development`,
    description: `Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Quo, ad. Laboriosam saepe nostrum quod corporis, debitis blanditiis`,
    imgUrl: dwnImg,
    createdAt: `Tuesday 23 July 2024`,
    ico: <FaBitcoin/>, 
    category: `Cryptocurrency`, 
    author: `Osman Abdullah`
  }
]
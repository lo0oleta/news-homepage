import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Box, chakra } from '@chakra-ui/react'
import { Header } from '@/components/Header'
import MenuComponent from '@/components/Menu'
import HeroSection from '@/components/HeroSection'


export default function Home() {
  return (
    <chakra.main>
    <MenuComponent />
  <Box
    height={{
      base: '100%', // 0-48em
      md: '50%', // 48em-80em,
      xl: '25%', // 80em+
    }}
    bg='teal.400'
    width={[
      '100%', // 0-30em
      '50%', // 30em-48em
      '25%', // 48em-62em
      '15%', // 62em+
    ]}
  />
         {/* <Header/> */}
         <HeroSection/>

</chakra.main>
  )
}

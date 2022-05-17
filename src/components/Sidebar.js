import React from 'react'
import { FaNetworkWired } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai'
import { IoNewspaperOutline } from 'react-icons/io5'
import { MdSpeakerNotes } from 'react-icons/md'

export const Sidebar =[
  {
    title: 'Home',
    path: '/',
    icon: <AiFillHome/>,
    cName: 'nav-text'
  },
  {
    title: 'Activity',
    path: '/activity',
    icon: <IoNewspaperOutline/>,
    cName: 'nav-text'
  },
  {
    title: 'Workspace',
    path: '/workspace',
    icon: <FaNetworkWired/>,
    cName: 'nav-text'
  },
  {
    title: 'Notes',
    path: '/notes',
    icon: <MdSpeakerNotes/>,
    cName: 'nav-text'
  }


]
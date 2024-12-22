import React from 'react'

type Props = {}

export default function HomePage() {
  return null; // No content since it's redirected
}

export const metadata = {
  redirect: {
    destination: "/kopken",
    permanent: false,
  },
};

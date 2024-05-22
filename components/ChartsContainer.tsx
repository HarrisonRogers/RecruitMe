'use client'
import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

import { useQuery } from '@tanstack/react-query'
import { getChartsDataAction } from '@/utils/actions'
import { useTheme } from 'next-themes'

const ChartsContainer = () => {
  const { data, isPending } = useQuery({
    queryKey: ['charts'],
    queryFn: () => getChartsDataAction(),
  })

  const { theme } = useTheme()

  if (isPending) return <h2 className="text-xl font-medium">Please wait...</h2>
  if (!data || data.length < 1) return null
  return (
    <section className="mt-16">
      <h1 className="text-4xl font-semibold text-center">
        Monthly Applications
      </h1>
      <ResponsiveContainer width={'100%'} height={300}>
        <BarChart data={data} margin={{ top: 50 }}>
          <CartesianGrid strokeDasharray={'3 3'} />
          <XAxis dataKey={'date'} />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar
            dataKey={'count'}
            fill={theme === 'dark' ? '#EA580C' : '#F97316'}
            barSize={75}
          />
        </BarChart>
      </ResponsiveContainer>
    </section>
  )
}

export default ChartsContainer

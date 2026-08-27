import { describe, expect, mock, test } from 'bun:test'

const redirect = mock(() => {})

mock.module('next/navigation', () => ({ redirect }))

const { GET } = await import('./route')

describe('GET', () => {
    test('redirects to the home page', async () => {
        // When:
        await GET()

        // Then:
        expect(redirect).toHaveBeenCalledWith('/')
        expect(redirect).toHaveBeenCalledTimes(1)
    })
})
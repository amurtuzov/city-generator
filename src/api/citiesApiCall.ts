import axios from 'axios'

const citiesApiCall = async (
  abortController?: AbortController,
  params?: Record<string, string>,
): Promise<{ result: Array<string> }> => {
  const { data } = await axios.post(
    '/ai/generate/city-names',
    { ...params },
    { signal: abortController?.signal },
  )
  return data
}

export { citiesApiCall }

import useSWR from "swr"

const fetcher = url => fetch(url).then(result => result.json())

export function useGithubUser(username){
    const {info, error, mutate} = useSWR(username ? `https://api.github.com/users/${username}`: null, fetcher)

    return {
        user: info,
        error,
        isLoad: !info && !error
    }
}
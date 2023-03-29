import useSWR from "swr"

const fetcher = url => fetch(url).then(result => result.json())

export function useGithubUser(username){
    const {info, error, mutate} = useSWR(`https://api.github.com/users/${username}`, fetcher)

    return {
        user: info,
        error,
        isLoad: !info && !error
    }
}
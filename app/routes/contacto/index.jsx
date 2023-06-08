import { useOutletContext } from "@remix-run/react"

function Index() {

    const data = useOutletContext()
    console.log(data)

  return (
    <div>pribea</div>
  )
}

export default Index
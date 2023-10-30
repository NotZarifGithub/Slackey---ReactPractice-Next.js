import Sidebar from "@/components/common/Sidebar"

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section className="flex py-[30px]">
      <div>
        <Sidebar />
      </div>
      <div className="w-full ">
        {children}
      </div>
    </section>
  )
}
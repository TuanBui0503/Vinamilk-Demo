import { useState } from "react";
export default function Section4 () {
    const [Active, setActive] = useState("");
  
    return (
        <>{/* Người dẫn đường */}
        <div className="md:py-28 sm:py-16 ">
          <h3 className="text-5xl font-semibold text-center sm:text-3xl">
            Người dẫn đường
          </h3>
          <div className="pt-12">
            {/* 2 nút ban điều hành + quản trị */}
            <div className="flex justify-center ">
              <div className="inline-flex justify-center py-2 p-2 border border-solid border-blue-800 rounded-md">
                <button 
                onClick={() => setActive("button1")}
                className={`w-full px-20 py-2 bg-blue-800 text-white ${Active === "button1" ? 'bg-blue-800 text-white' : 'bg-[#FFFFF1] text-[#0213B0]'}`}>
                  <span>Ban điều hành</span>
                </button>
                <button onClick={() => setActive("button2")}
                className={`w-full px-20 py-2 whitespace-nowrap ${Active === "button2" ? 'bg-blue-800 text-white' : 'bg-[#FFFFF1] text-[#0213B0]'}`}>
                  <span>Hội đồng quản trị</span>
                </button>
              </div>
            </div>
            {/* ban quản trị */}
            <div className="pt-12">
              <div className="flex flex-wrap border-b border-solid border-blue-800">
                <div className="md:w-[25%] sm:w-[50%] p-2 sm:p-4">
                  <button className="flex flex-col w-full gap-2 p-4 text-left border-r border-blue-800">
                    <span className="text-sm">Bà</span>
                    <h5 className="text-xl">Mai Kiều Liên</h5>
                    <span className="text-sm italic">Tổng giám đốc</span>
                  </button>
                </div>
                <div className="md:w-[25%] sm:w-[50%] p-2 sm:p-4">
                  <button className="flex flex-col w-full gap-2 p-4 text-left border-r border-blue-800">
                    <span className="text-sm">Ông</span>
                    <h5 className="text-xl">Đoàn Quốc Khánh</h5>
                    <span className="text-sm italic">
                      Quyền Giám đốc Điều hành Phát triển vùng nguyên liệu
                    </span>
                  </button>
                </div>
                <div className="md:w-[25%] sm:w-[50%] p-2 sm:p-4">
                  <button className="flex flex-col w-full gap-2 p-4 text-left border-r border-blue-800">
                    <span className="text-sm">Bà</span>
                    <h5 className="text-xl">Bùi Thị Hương</h5>
                    <span className="text-sm italic">
                      Giám đốc Điều hành Nhân sự & Hành chính, Đối ngoại
                    </span>
                  </button>
                </div>
                <div className="md:w-[25%] sm:w-[50%] p-2 sm:p-4">
                  <button className="flex flex-col w-full gap-2 p-4 text-left border-r border-blue-800">
                    <span className="text-sm">Ông</span>
                    <h5 className="text-xl">Nguyễn Quốc Khánh</h5>
                    <span className="text-sm italic">
                      Giám đốc Điều hành Nghiên cứu và Phát triển
                    </span>
                  </button>
                </div>
              </div>
  
              <div className="flex flex-wrap ">
                <div className="md:w-[25%] sm:w-[50%] p-2 sm:p-4">
                  <button className="flex flex-col w-full gap-2 p-4 text-left border-r border-blue-800">
                    <span className="text-sm">Ông</span>
                    <h5 className="text-xl">Lê Thành Liên</h5>
                    <span className="text-sm italic">
                      Giám đốc Điều hành Tài chính
                    </span>
                  </button>
                </div>
                <div className="md:w-[25%] sm:w-[50%] p-2 sm:p-4">
                  <button className="flex flex-col w-full gap-2 p-4 text-left border-r border-blue-800">
                    <span className="text-sm">Ông</span>
                    <h5 className="text-xl">Nguyễn Quang Trí</h5>
                    <span className="text-sm italic">
                      Giám đốc Điều hành Marketing
                    </span>
                  </button>
                </div>
                <div className="md:w-[25%] sm:w-[50%] p-2 sm:p-4">
                  <button className="flex flex-col w-full gap-2 p-4 text-left border-r border-blue-800">
                    <span className="text-sm">Ông</span>
                    <h5 className="text-xl">Lê Hoàng Minh</h5>
                    <span className="text-sm italic">
                      Giám đốc Điều hành Sản xuất
                    </span>
                  </button>
                </div>
                <div className="md:w-[25%] sm:w-[50%] p-2 sm:p-4"></div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}
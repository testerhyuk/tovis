import React, { useEffect, useState } from 'react'
import BasicLayout from '../layout/BasicLayout';
import { getAll } from '../api/workApi';
import * as XLSX from "xlsx";

const initState = {
    work_id: 0,
    workType: '',
    worker: '',
    quantity: 0,
    work_finished: ''
}

export default function MainPage() {
    const [today, setToday] = useState('');
    const [works, setWorks] = useState(initState);

    useEffect(() => {
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        setToday(formattedDate);

        getAll().then(data => {
            setWorks(data)
        })
    }, [])

    const handleDownloadExcel = () => {
      if (works.length === 0) {
          alert("다운로드할 데이터가 없습니다.");
          return;
      }

      // 🔹 workId 제거 및 컬럼명 변경
      const formattedData = works.map(({ workId, workType, worker, quantity, workFinished }) => ({
            "작업 타입": workType,
            "작업자": worker,
            "수량": quantity,
            "완료 시간": new Date(workFinished).toLocaleDateString('ko-KR', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit'
            }).replace(/\.\s?/g, '-').replace(/-$/, ' ') +
            new Date(workFinished).toLocaleTimeString('ko-KR', {
              hour: '2-digit',
              minute: '2-digit',
              hour12: false
            }).replace(':', '시 ') + '분'
    }));
    

      // 🔹 JSON 데이터를 엑셀 형식으로 변환
      const worksheet = XLSX.utils.json_to_sheet(formattedData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "작업 기록");

      XLSX.writeFileXLSX(workbook, `작업기록_${today}.xlsx`);
  };

  return (
    <BasicLayout>
        {/* 작업 목록 */}
      <div className="max-w-4xl mx-auto mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">{today} 작업 일지</h2>

        {/* 🔹 엑셀 다운로드 버튼 */}
        <button
            onClick={handleDownloadExcel}
            className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
            엑셀 다운로드
        </button>
        
        {works.length > 0 ? (
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">작업 타입</th>
                <th className="border border-gray-300 px-4 py-2">작업자</th>
                <th className="border border-gray-300 px-4 py-2">수량</th>
                <th className="border border-gray-300 px-4 py-2">완료 시간</th>
              </tr>
            </thead>
            <tbody>
              {works.map((work) => (
                <tr key={work.workId} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">{work.workType}</td>
                  <td className="border border-gray-300 px-4 py-2">{work.worker}</td>
                  <td className="border border-gray-300 px-4 py-2">{work.quantity}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {new Date(work.workFinished).toLocaleDateString('ko-KR', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit'
                    }).replace(/\.\s?/g, '-').replace(/-$/, '')}{" "}
                    {new Date(work.workFinished).toLocaleTimeString('ko-KR', {
                      hour: '2-digit',
                      minute: '2-digit',
                      hour12: false
                    }).replace(':', '시 ') + '분'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-500">데이터가 없습니다.</p>
        )}
      </div>
    </BasicLayout>
  )
}

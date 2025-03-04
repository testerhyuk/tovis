import React, { useState } from 'react'
import BasicLayout from '../layout/BasicLayout'
import { createWorks } from '../api/workApi';
import { useNavigate } from 'react-router-dom';

const initState = {
    workType: '',
    worker: '',
    quantity: 0
}

export default function WorkPage() {
    const [data, setData] = useState(initState);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const { workType, worker, quantity } = data;

        if (!workType || !worker || quantity <= 0) {
            alert("작업 타입과 작업자, 수량을 올바르게 입력하세요.");
            return;
        }

        try {
            await createWorks({
                workType,
                worker,
                quantity: parseInt(quantity, 10)
            });

            alert(`작업 작성 완료!`);
            navigate("/"); // "/" 페이지로 이동
        } catch (error) {
            alert("작업 등록 실패: " + (error.response?.data?.message || "서버 오류"));
        }
    };

  return (
    <BasicLayout>
            <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
                <h2 className="text-lg font-semibold mb-4">작업 등록</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">작업 타입</label>
                        <input
                            type="text"
                            name="workType"
                            value={data.workType}
                            onChange={handleChange}
                            className="w-full border rounded px-3 py-2"
                            placeholder="작업 타입 입력"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">작업자</label>
                        <input
                            type="text"
                            name="worker"
                            value={data.worker}
                            onChange={handleChange}
                            className="w-full border rounded px-3 py-2"
                            placeholder="작업자 이름 입력"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">수량</label>
                        <input
                            type="number"
                            name="quantity"
                            value={data.quantity}
                            onChange={handleChange}
                            className="w-full border rounded px-3 py-2"
                            placeholder="작업 수량 입력"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                    >
                        작업 등록
                    </button>
                </form>
            </div>
        </BasicLayout>
    );
}

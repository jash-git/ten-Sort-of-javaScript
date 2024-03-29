﻿function bucketSort(nums)
{
	// 桶的个数，只要是正数即可
	let num = 5;
	let max = Math.max(...nums);
	let min = Math.min(...nums);
	// 计算每个桶存放的数值范围，至少为1，
	let range = Math.ceil((max - min) / num) || 1;
	// 创建二维数组，第一维表示第几个桶，第二维表示该桶里存放的数
	let arr = Array.from(Array(num)).map(() => Array().fill(0));
	nums.forEach(val => {
	// 计算元素应该分布在哪个桶
	let index = parseInt((val - min) / range);
	// 防止index越界，例如当[5,1,1,2,0,0]时index会出现5
	index = index >= num ? num - 1 : index;
	let temp = arr[index];
	// 插入排序，将元素有序插入到桶中
	let j = temp.length - 1;
	while(j >= 0 && val < temp[j])
	{
		temp[j+1] = temp[j];
		j--;
	}
	temp[j+1] = val;
	})
	// 修改回原数组
	let res = [].concat.apply([], arr);
	nums.forEach((val, i) => {
	nums[i] = res[i];
	})
}
function countingSort(nums) 
{
	let arr = [];
	let max = Math.max(...nums);
	let min = Math.min(...nums);
	// 加上最小值的相反数来缩小数组范围
	let add = -min;
	for(let i=0, len=nums.length; i<len; i++)
	{
		let temp = nums[i];
		temp += add;
		arr[temp] = arr[temp] + 1 || 1;
	}
	let index = 0;
	for(let i=min; i<=max; i++)
	{
		let temp = arr[i+add];
		while(temp > 0)
		{
			nums[index++] = i;
			temp--;
		}
	}
}

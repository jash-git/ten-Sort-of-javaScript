function bubbleSort(nums) 
{
	for(let i=0, len=nums.length; i<len-1; i++)
	{
		// 如果一轮比较中没有需要交换的数据，则说明数组已经有序。主要是对[5,1,2,3,4]之类的数组进行优化
		let mark = true;
		for(let j=0; j<len-i-1; j++)
		{
			if(nums[j] > nums[j+1])
			{
				[nums[j], nums[j+1]] = [nums[j+1], nums[j]];
				mark = false;
			}
		}
		if(mark)
		{
			return;		
		}

	}
}

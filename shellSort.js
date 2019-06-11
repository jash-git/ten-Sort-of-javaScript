function shellSort(nums)
{
	let len = nums.length;
	// 初始步数
	let gap = parseInt(len / 2);
	// 逐渐缩小步数
	while(gap) 
	{
		// 从第gap个元素开始遍历
		for(let i=gap; i<len; i++)
		{
			// 逐步其和前面其他的组成员进行比较和交换
			for(let j=i-gap; j>=0; j-=gap)
			{
				if(nums[j] > nums[j+gap])
				{
					[nums[j], nums[j+gap]] = [nums[j+gap], nums[j]];
				}
				else 
				{
					break;
				}
			}
		}
		gap = parseInt(gap / 2);
	}
}

function selectSort(nums)
{
	for(let i=0, len=nums.length; i<len; i++)
	{
		for(let j=i+1; j<len; j++)
		{
			if(nums[i] > nums[j])
			{
				[nums[i], nums[j]] = [nums[j], nums[i]];
			}
		}
	}
}

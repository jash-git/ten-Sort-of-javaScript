function insertSort(nums)
{
	for(let i=1, len=nums.length; i<len; i++)
	{
		let temp = nums[i];
		let j = i;
		while(j >= 0 && temp < nums[j-1])
		{
			nums[j] = nums[j-1];
			j--;
		}
		nums[j] = temp;
	}
}

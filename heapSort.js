function heapSort(nums)
{
	// 调整最大堆，使index的值大于左右节点
	function adjustHeap(nums, index, size)
	{
		// 交换后可能会破坏堆结构，需要循环使得每一个父节点都大于左右结点
		while(true)
		{
			let max = index;
			let left = index * 2 + 1; // 左节点
			let right = index * 2 + 2; // 右节点
			if(left < size && nums[max] < nums[left]) max = left;
			if(right < size && nums[max] < nums[right]) max = right;
			// 如果左右结点大于当前的结点则交换，并再循环一遍判断交换后的左右结点位置是否破坏了堆结构（比左右结点小了）
			if(index !== max)
			{
				[nums[index], nums[max]] = [nums[max], nums[index]];
				index = max;
			}
			else
			{
				break;
			}
		}
	}
	// 建立最大堆
	function buildHeap(nums)
	{
		// 注意这里的头节点是从0开始的，所以最后一个非叶子结点是 parseInt(nums.length/2)-1
		let start = parseInt(nums.length / 2) - 1;
		let size = nums.length;
		// 从最后一个非叶子结点开始调整，直至堆顶。
		for(let i=start; i>=0; i--)
		{
			adjustHeap(nums, i, size);
		}
	}
	buildHeap(nums);
	// 循环n-1次，每次循环后交换堆顶元素和堆底元素并重新调整堆结构
	for(let i=nums.length-1; i>0; i--)
	{
		[nums[i], nums[0]] = [nums[0], nums[i]];
		adjustHeap(nums, 0, i);
	}
}
